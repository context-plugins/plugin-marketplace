from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

ListLatestArtifactsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _ListLatestArtifactsError:
    def map(self, status_code: int, content: bytes) -> ListLatestArtifactsErrorBody:
        match status_code:
            case 401:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


list_latest_artifacts_error_mapper: Final[ErrorMapper[ListLatestArtifactsErrorBody]] = _ListLatestArtifactsError()
