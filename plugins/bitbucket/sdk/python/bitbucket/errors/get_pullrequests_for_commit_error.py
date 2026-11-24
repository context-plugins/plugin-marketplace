from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetPullrequestsForCommitErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetPullrequestsForCommitError:
    def map(self, status_code: int, content: bytes) -> GetPullrequestsForCommitErrorBody:
        match status_code:
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_pullrequests_for_commit_error_mapper: Final[
    ErrorMapper[GetPullrequestsForCommitErrorBody]
] = _GetPullrequestsForCommitError()
