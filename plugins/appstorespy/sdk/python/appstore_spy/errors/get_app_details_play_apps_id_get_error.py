from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_apps401_error1 import PlayApps401Error1

GetAppDetailsPlayAppsIdGetErrorBody: TypeAlias = PlayApps401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetAppDetailsPlayAppsIdGetError:
    def map(self, status_code: int, content: bytes) -> GetAppDetailsPlayAppsIdGetErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayApps401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_app_details_play_apps_id_get_error_mapper: Final[
    ErrorMapper[GetAppDetailsPlayAppsIdGetErrorBody]
] = _GetAppDetailsPlayAppsIdGetError()
