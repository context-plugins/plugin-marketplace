from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.play_apps_installs_daily401_error1 import PlayAppsInstallsDaily401Error1

GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody: TypeAlias = (
    PlayAppsInstallsDaily401Error1 | str | HttpValidationError | RawError
)


@dataclass(frozen=True, slots=True)
class _GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError:
    def map(self, status_code: int, content: bytes) -> GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody:
        match status_code:
            case 401:
                return decode_json[PlayAppsInstallsDaily401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_apps_installs_daily_play_apps_id_installs_daily_get_error_mapper: Final[
    ErrorMapper[GetAppsInstallsDailyPlayAppsIdInstallsDailyGetErrorBody]
] = _GetAppsInstallsDailyPlayAppsIdInstallsDailyGetError()
