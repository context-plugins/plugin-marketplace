from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_identities401_error1 import ApiV2Identities401Error1
from ..models.api_v2_identities404_error1 import ApiV2Identities404Error1
from ..models.api_v2_identities422_error1 import ApiV2Identities422Error1

IdentitiesDestroyErrorBody: TypeAlias = (
    ApiV2Identities401Error1 | ApiV2Identities404Error1 | ApiV2Identities422Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _IdentitiesDestroyError:
    def map(self, status_code: int, content: bytes) -> IdentitiesDestroyErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2Identities401Error1](content)
            case 404:
                return decode_json[ApiV2Identities404Error1](content)
            case 422:
                return decode_json[ApiV2Identities422Error1](content)
            case _:
                return RawError(status_code, content)


identities_destroy_error_mapper: Final[ErrorMapper[IdentitiesDestroyErrorBody]] = _IdentitiesDestroyError()
