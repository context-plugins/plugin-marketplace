from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.invalid_request_exception import InvalidRequestException
from ..models.throttled_exception import ThrottledException

ListResourcePoliciesErrorBody: TypeAlias = InvalidRequestException | ThrottledException | RawError


@dataclass(frozen=True, slots=True)
class _ListResourcePoliciesError:
    def map(self, status_code: int, content: bytes) -> ListResourcePoliciesErrorBody:
        match status_code:
            case 400:
                return decode_json[InvalidRequestException](content)
            case 429:
                return decode_json[ThrottledException](content)
            case _:
                return RawError(status_code, content)


list_resource_policies_error_mapper: Final[ErrorMapper[ListResourcePoliciesErrorBody]] = _ListResourcePoliciesError()
