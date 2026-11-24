from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_policies400_error1 import ApiV1Policies400Error1
from ..models.api_v1_policies403_error1 import ApiV1Policies403Error1
from ..models.api_v1_policies409_error1 import ApiV1Policies409Error1

PostApiV1PoliciesErrorBody: TypeAlias = (
    ApiV1Policies400Error1 | ApiV1Policies403Error1 | ApiV1Policies409Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _PostApiV1PoliciesError:
    def map(self, status_code: int, content: bytes) -> PostApiV1PoliciesErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1Policies400Error1](content)
            case 403:
                return decode_json[ApiV1Policies403Error1](content)
            case 409:
                return decode_json[ApiV1Policies409Error1](content)
            case _:
                return RawError(status_code, content)


post_api_v1_policies_error_mapper: Final[ErrorMapper[PostApiV1PoliciesErrorBody]] = _PostApiV1PoliciesError()
