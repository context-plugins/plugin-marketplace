from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_policies_versions400_error1 import ApiV1PoliciesVersions400Error1
from ..models.api_v1_policies_versions403_error1 import ApiV1PoliciesVersions403Error1
from ..models.api_v1_policies_versions404_error1 import ApiV1PoliciesVersions404Error1

PostApiV1PoliciesByIdVersionsErrorBody: TypeAlias = (
    ApiV1PoliciesVersions400Error1 | ApiV1PoliciesVersions403Error1 | ApiV1PoliciesVersions404Error1 | RawError
)


@dataclass(frozen=True, slots=True)
class _PostApiV1PoliciesByIdVersionsError:
    def map(self, status_code: int, content: bytes) -> PostApiV1PoliciesByIdVersionsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1PoliciesVersions400Error1](content)
            case 403:
                return decode_json[ApiV1PoliciesVersions403Error1](content)
            case 404:
                return decode_json[ApiV1PoliciesVersions404Error1](content)
            case _:
                return RawError(status_code, content)


post_api_v1_policies_by_id_versions_error_mapper: Final[
    ErrorMapper[PostApiV1PoliciesByIdVersionsErrorBody]
] = _PostApiV1PoliciesByIdVersionsError()
