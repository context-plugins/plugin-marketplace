from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

GetAddonLinkersErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _GetAddonLinkersError:
    def map(self, status_code: int, content: bytes) -> GetAddonLinkersErrorBody:
        match status_code:
            case 401:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


get_addon_linkers_error_mapper: Final[ErrorMapper[GetAddonLinkersErrorBody]] = _GetAddonLinkersError()
