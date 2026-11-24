from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.http_validation_error import HttpValidationError
from ..models.ios_apps_recrawl401_error1 import IosAppsRecrawl401Error1

GetRecrawlIosAppsIdRecrawlGetErrorBody: TypeAlias = IosAppsRecrawl401Error1 | str | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _GetRecrawlIosAppsIdRecrawlGetError:
    def map(self, status_code: int, content: bytes) -> GetRecrawlIosAppsIdRecrawlGetErrorBody:
        match status_code:
            case 401:
                return decode_json[IosAppsRecrawl401Error1](content)
            case 402:
                return decode_json[str](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


get_recrawl_ios_apps_id_recrawl_get_error_mapper: Final[
    ErrorMapper[GetRecrawlIosAppsIdRecrawlGetErrorBody]
] = _GetRecrawlIosAppsIdRecrawlGetError()
