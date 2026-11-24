from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

SetCountrySettingsErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _SetCountrySettingsError:
    def map(self, status_code: int, content: bytes) -> SetCountrySettingsErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 429 | 500:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


set_country_settings_error_mapper: Final[ErrorMapper[SetCountrySettingsErrorBody]] = _SetCountrySettingsError()
