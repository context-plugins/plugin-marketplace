from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.upload_file400_error1 import UploadFile400Error1

UploadSingleFileErrorBody: TypeAlias = UploadFile400Error1 | RawError


@dataclass(frozen=True, slots=True)
class _UploadSingleFileError:
    def map(self, status_code: int, content: bytes) -> UploadSingleFileErrorBody:
        match status_code:
            case 400:
                return decode_json[UploadFile400Error1](content)
            case _:
                return RawError(status_code, content)


upload_single_file_error_mapper: Final[ErrorMapper[UploadSingleFileErrorBody]] = _UploadSingleFileError()
