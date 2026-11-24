from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

DisconnectIntegrationIntegrationsProviderDeleteErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _DisconnectIntegrationIntegrationsProviderDeleteError:
    def map(self, status_code: int, content: bytes) -> DisconnectIntegrationIntegrationsProviderDeleteErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


disconnect_integration_integrations_provider_delete_error_mapper: Final[
    ErrorMapper[DisconnectIntegrationIntegrationsProviderDeleteErrorBody]
] = _DisconnectIntegrationIntegrationsProviderDeleteError()
