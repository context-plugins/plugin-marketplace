from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

RenameDiscordChannelErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _RenameDiscordChannelError:
    def map(self, status_code: int, content: bytes) -> RenameDiscordChannelErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 413 | 429:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


rename_discord_channel_error_mapper: Final[ErrorMapper[RenameDiscordChannelErrorBody]] = _RenameDiscordChannelError()
