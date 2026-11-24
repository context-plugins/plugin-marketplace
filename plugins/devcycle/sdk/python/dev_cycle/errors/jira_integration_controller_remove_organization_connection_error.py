from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

JiraIntegrationControllerRemoveOrganizationConnectionErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _JiraIntegrationControllerRemoveOrganizationConnectionError:
    def map(self, status_code: int, content: bytes) -> JiraIntegrationControllerRemoveOrganizationConnectionErrorBody:
        match status_code:
            case 403:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


jira_integration_controller_remove_organization_connection_error_mapper: Final[
    ErrorMapper[JiraIntegrationControllerRemoveOrganizationConnectionErrorBody]
] = _JiraIntegrationControllerRemoveOrganizationConnectionError()
