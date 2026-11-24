from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error import Error

DeleteAddonLinkersByLinkerKeyValuesErrorBody: TypeAlias = Error | RawError


@dataclass(frozen=True, slots=True)
class _DeleteAddonLinkersByLinkerKeyValuesError:
    def map(self, status_code: int, content: bytes) -> DeleteAddonLinkersByLinkerKeyValuesErrorBody:
        match status_code:
            case 401 | 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


delete_addon_linkers_by_linker_key_values_error_mapper: Final[
    ErrorMapper[DeleteAddonLinkersByLinkerKeyValuesErrorBody]
] = _DeleteAddonLinkersByLinkerKeyValuesError()
