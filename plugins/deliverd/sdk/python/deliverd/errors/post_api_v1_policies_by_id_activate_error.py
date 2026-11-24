from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_policies_activate403_error1 import ApiV1PoliciesActivate403Error1
from ..models.api_v1_policies_activate404_error1 import ApiV1PoliciesActivate404Error1
from ..models.api_v1_policies_activate409_error1 import ApiV1PoliciesActivate409Error1

PostApiV1PoliciesByIdActivateErrorBody: TypeAlias = (
    ApiV1PoliciesActivate403Error1 | ApiV1PoliciesActivate404Error1 | ApiV1PoliciesActivate409Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _PostApiV1PoliciesByIdActivateError:
    def map(self, status_code: int, content: bytes) -> PostApiV1PoliciesByIdActivateErrorBody:
        match status_code:
            case 403:
                return decode_json[ApiV1PoliciesActivate403Error1](content)
            case 404:
                return decode_json[ApiV1PoliciesActivate404Error1](content)
            case 409:
                return decode_json[ApiV1PoliciesActivate409Error1](content)
            case _:
                return RawError(status_code, content)


post_api_v1_policies_by_id_activate_error_mapper: Final[
    ErrorMapper[PostApiV1PoliciesByIdActivateErrorBody]
] = _PostApiV1PoliciesByIdActivateError()
