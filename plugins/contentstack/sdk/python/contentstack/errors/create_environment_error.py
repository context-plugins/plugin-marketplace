from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error2 import Error2
from ..models.error2_contentstack_environments_api import Error2ContentstackEnvironmentsApi

CreateEnvironmentErrorBody: TypeAlias = Error2ContentstackEnvironmentsApi | Error2 | RawError


@dataclass(frozen=True, slots=True)
class _CreateEnvironmentError:
    def map(self, status_code: int, content: bytes) -> CreateEnvironmentErrorBody:
        match status_code:
            case 400:
                return decode_json[Error2ContentstackEnvironmentsApi](content)
            case 401:
                return decode_json[Error2](content)
            case _:
                return RawError(status_code, content)


create_environment_error_mapper: Final[ErrorMapper[CreateEnvironmentErrorBody]] = _CreateEnvironmentError()
