from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

GetBranchesByBranchApisErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _GetBranchesByBranchApisError:
    def map(self, status_code: int, content: bytes) -> GetBranchesByBranchApisErrorBody:
        match status_code:
            case 401 | 404:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


get_branches_by_branch_apis_error_mapper: Final[
    ErrorMapper[GetBranchesByBranchApisErrorBody]
] = _GetBranchesByBranchApisError()
