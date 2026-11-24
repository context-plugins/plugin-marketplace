from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_misc_discord_message400_error1 import ApiV1MiscDiscordMessage400Error1
from ..models.api_v1_misc_discord_message401_error1 import ApiV1MiscDiscordMessage401Error1
from ..models.api_v1_misc_discord_message403_error1 import ApiV1MiscDiscordMessage403Error1
from ..models.api_v1_misc_discord_message404_error1 import ApiV1MiscDiscordMessage404Error1
from ..models.api_v1_misc_discord_message429_error1 import ApiV1MiscDiscordMessage429Error1
from ..models.api_v1_misc_discord_message500_error1 import ApiV1MiscDiscordMessage500Error1
from ..models.api_v1_misc_discord_message502_error1 import ApiV1MiscDiscordMessage502Error1
from ..models.api_v1_misc_discord_message503_error1 import ApiV1MiscDiscordMessage503Error1
from ..models.api_v1_misc_discord_message504_error1 import ApiV1MiscDiscordMessage504Error1

MiscDiscordDeleteMessageErrorBody: TypeAlias = (
    ApiV1MiscDiscordMessage400Error1
    | ApiV1MiscDiscordMessage401Error1
    | ApiV1MiscDiscordMessage403Error1
    | ApiV1MiscDiscordMessage404Error1
    | ApiV1MiscDiscordMessage429Error1
    | ApiV1MiscDiscordMessage500Error1
    | ApiV1MiscDiscordMessage502Error1
    | ApiV1MiscDiscordMessage503Error1
    | ApiV1MiscDiscordMessage504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _MiscDiscordDeleteMessageError:
    def map(self, status_code: int, content: bytes) -> MiscDiscordDeleteMessageErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1MiscDiscordMessage400Error1](content)
            case 401:
                return decode_json[ApiV1MiscDiscordMessage401Error1](content)
            case 403:
                return decode_json[ApiV1MiscDiscordMessage403Error1](content)
            case 404:
                return decode_json[ApiV1MiscDiscordMessage404Error1](content)
            case 429:
                return decode_json[ApiV1MiscDiscordMessage429Error1](content)
            case 500:
                return decode_json[ApiV1MiscDiscordMessage500Error1](content)
            case 502:
                return decode_json[ApiV1MiscDiscordMessage502Error1](content)
            case 503:
                return decode_json[ApiV1MiscDiscordMessage503Error1](content)
            case 504:
                return decode_json[ApiV1MiscDiscordMessage504Error1](content)
            case _:
                return RawError(status_code, content)


misc_discord_delete_message_error_mapper: Final[
    ErrorMapper[MiscDiscordDeleteMessageErrorBody]
] = _MiscDiscordDeleteMessageError()
