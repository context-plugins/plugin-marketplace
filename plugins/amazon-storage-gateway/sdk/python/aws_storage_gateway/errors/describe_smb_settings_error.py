from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError

DescribeSmbSettingsErrorBody: TypeAlias = RawError


@dataclass(frozen=True, slots=True)
class _DescribeSmbSettingsError:
    def map(self, status_code: int, content: bytes) -> DescribeSmbSettingsErrorBody:
        match status_code:
            case 400 | 500:
                return RawError(status_code, content)
            case _:
                return RawError(status_code, content)


describe_smb_settings_error_mapper: Final[ErrorMapper[DescribeSmbSettingsErrorBody]] = _DescribeSmbSettingsError()
