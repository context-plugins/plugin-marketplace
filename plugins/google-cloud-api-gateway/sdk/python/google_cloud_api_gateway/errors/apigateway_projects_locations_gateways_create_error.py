from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.google_rpc_error import GoogleRpcError

ApigatewayProjectsLocationsGatewaysCreateErrorBody: TypeAlias = GoogleRpcError | RawError


@dataclass(frozen=True, slots=True)
class _ApigatewayProjectsLocationsGatewaysCreateError:
    def map(self, status_code: int, content: bytes) -> ApigatewayProjectsLocationsGatewaysCreateErrorBody:
        match status_code:
            case code if 400 <= code <= 499:
                return decode_json[GoogleRpcError](content)
            case _:
                return RawError(status_code, content)


apigateway_projects_locations_gateways_create_error_mapper: Final[
    ErrorMapper[ApigatewayProjectsLocationsGatewaysCreateErrorBody]
] = _ApigatewayProjectsLocationsGatewaysCreateError()
