from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_comment_import400_error1 import ApiV1CommentImport400Error1
from ..models.api_v1_comment_import401_error1 import ApiV1CommentImport401Error1
from ..models.api_v1_comment_import403_error1 import ApiV1CommentImport403Error1
from ..models.api_v1_comment_import404_error1 import ApiV1CommentImport404Error1
from ..models.api_v1_comment_import409_error1 import ApiV1CommentImport409Error1
from ..models.api_v1_comment_import429_error1 import ApiV1CommentImport429Error1
from ..models.api_v1_comment_import500_error1 import ApiV1CommentImport500Error1
from ..models.api_v1_comment_import502_error1 import ApiV1CommentImport502Error1
from ..models.api_v1_comment_import503_error1 import ApiV1CommentImport503Error1
from ..models.api_v1_comment_import504_error1 import ApiV1CommentImport504Error1

CommentImportCreateErrorBody: TypeAlias = (
    ApiV1CommentImport400Error1
    | ApiV1CommentImport401Error1
    | ApiV1CommentImport403Error1
    | ApiV1CommentImport404Error1
    | ApiV1CommentImport409Error1
    | ApiV1CommentImport429Error1
    | ApiV1CommentImport500Error1
    | ApiV1CommentImport502Error1
    | ApiV1CommentImport503Error1
    | ApiV1CommentImport504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _CommentImportCreateError:
    def map(self, status_code: int, content: bytes) -> CommentImportCreateErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1CommentImport400Error1](content)
            case 401:
                return decode_json[ApiV1CommentImport401Error1](content)
            case 403:
                return decode_json[ApiV1CommentImport403Error1](content)
            case 404:
                return decode_json[ApiV1CommentImport404Error1](content)
            case 409:
                return decode_json[ApiV1CommentImport409Error1](content)
            case 429:
                return decode_json[ApiV1CommentImport429Error1](content)
            case 500:
                return decode_json[ApiV1CommentImport500Error1](content)
            case 502:
                return decode_json[ApiV1CommentImport502Error1](content)
            case 503:
                return decode_json[ApiV1CommentImport503Error1](content)
            case 504:
                return decode_json[ApiV1CommentImport504Error1](content)
            case _:
                return RawError(status_code, content)


comment_import_create_error_mapper: Final[ErrorMapper[CommentImportCreateErrorBody]] = _CommentImportCreateError()
