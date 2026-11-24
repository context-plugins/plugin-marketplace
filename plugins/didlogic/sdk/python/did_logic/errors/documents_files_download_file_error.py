from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v2_documents_files401_error1 import ApiV2DocumentsFiles401Error1
from ..models.error import Error

DocumentsFilesDownloadFileErrorBody: TypeAlias = ApiV2DocumentsFiles401Error1 | Error | RawError


@dataclass(frozen=True, slots=True)
class _DocumentsFilesDownloadFileError:
    def map(self, status_code: int, content: bytes) -> DocumentsFilesDownloadFileErrorBody:
        match status_code:
            case 401:
                return decode_json[ApiV2DocumentsFiles401Error1](content)
            case 404:
                return decode_json[Error](content)
            case _:
                return RawError(status_code, content)


documents_files_download_file_error_mapper: Final[
    ErrorMapper[DocumentsFilesDownloadFileErrorBody]
] = _DocumentsFilesDownloadFileError()
