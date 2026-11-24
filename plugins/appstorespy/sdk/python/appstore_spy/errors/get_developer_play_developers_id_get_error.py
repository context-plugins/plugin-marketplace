from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_developers401_error1 import PlayDevelopers401Error1

GetDeveloperPlayDevelopersIdGetErrorBody: TypeAlias = PlayDevelopers401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetDeveloperPlayDevelopersIdGetError:
    def map(self, status_code: int, content: bytes) -> GetDeveloperPlayDevelopersIdGetErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayDevelopers401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_developer_play_developers_id_get_error_mapper: Final[
    ErrorMapper[GetDeveloperPlayDevelopersIdGetErrorBody]
] = _GetDeveloperPlayDevelopersIdGetError()
