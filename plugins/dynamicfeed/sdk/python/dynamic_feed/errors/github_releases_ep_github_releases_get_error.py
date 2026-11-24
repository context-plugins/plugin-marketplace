from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError

GithubReleasesEpGithubReleasesGetErrorBody: TypeAlias = HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GithubReleasesEpGithubReleasesGetError:
    def map(self, status_code: int, content: bytes) -> GithubReleasesEpGithubReleasesGetErrorBody:
        match status_code:
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


github_releases_ep_github_releases_get_error_mapper: Final[
    ErrorMapper[GithubReleasesEpGithubReleasesGetErrorBody]
] = _GithubReleasesEpGithubReleasesGetError()
