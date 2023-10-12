import { Result } from "axe-core";

const terminalLog = (violations: Result[]) => {
  cy.task(
    'log',
    `${violations.length} accessibility violation${
      violations.length === 1 ? '' : 's'
    } ${violations.length === 1 ? 'was' : 'were'} detected`
  )
  const violationData = violations.map(
    ({id, impact, description, nodes}) => ({
      id,
      impact,
      description,
      nodes: nodes.length
    })
  )
  cy.task('table', violationData)
};

export default terminalLog;
