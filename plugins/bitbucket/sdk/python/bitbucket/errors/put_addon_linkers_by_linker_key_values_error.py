from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

PutAddonLinkersByLinkerKeyValuesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _PutAddonLinkersByLinkerKeyValuesError:
    def map(self, status_code: int, content: bytes) -> PutAddonLinkersByLinkerKeyValuesErrorBody:
        match status_code:
            case 400 | 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


put_addon_linkers_by_linker_key_values_error_mapper: Final[
    ErrorMapper[PutAddonLinkersByLinkerKeyValuesErrorBody]
] = _PutAddonLinkersByLinkerKeyValuesError()
