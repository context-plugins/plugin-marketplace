from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

AuthorizeIntegrationIntegrationsProviderAuthorizePostErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _AuthorizeIntegrationIntegrationsProviderAuthorizePostError:
    def map(self, status_code: int, content: bytes) -> AuthorizeIntegrationIntegrationsProviderAuthorizePostErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


authorize_integration_integrations_provider_authorize_post_error_mapper: Final[
    ErrorMapper[AuthorizeIntegrationIntegrationsProviderAuthorizePostErrorBody]
] = _AuthorizeIntegrationIntegrationsProviderAuthorizePostError()
