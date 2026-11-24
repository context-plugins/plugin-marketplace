from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody: TypeAlias = (
    ErrorResponse | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _ListRegistryScenariosV2RegistryRegistryIdScenariosGetError:
    def map(self, status_code: int, content: bytes) -> ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


list_registry_scenarios_v2_registry_registry_id_scenarios_get_error_mapper: Final[
    ErrorMapper[ListRegistryScenariosV2RegistryRegistryIdScenariosGetErrorBody]
] = _ListRegistryScenariosV2RegistryRegistryIdScenariosGetError()
