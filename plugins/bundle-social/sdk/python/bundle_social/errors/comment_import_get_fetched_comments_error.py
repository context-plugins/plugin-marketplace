from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_comment_import_comments400_error1 import ApiV1CommentImportComments400Error1
from ..models.api_v1_comment_import_comments401_error1 import ApiV1CommentImportComments401Error1
from ..models.api_v1_comment_import_comments403_error1 import ApiV1CommentImportComments403Error1
from ..models.api_v1_comment_import_comments404_error1 import ApiV1CommentImportComments404Error1
from ..models.api_v1_comment_import_comments429_error1 import ApiV1CommentImportComments429Error1
from ..models.api_v1_comment_import_comments500_error1 import ApiV1CommentImportComments500Error1
from ..models.api_v1_comment_import_comments502_error1 import ApiV1CommentImportComments502Error1
from ..models.api_v1_comment_import_comments503_error1 import ApiV1CommentImportComments503Error1
from ..models.api_v1_comment_import_comments504_error1 import ApiV1CommentImportComments504Error1

CommentImportGetFetchedCommentsErrorBody: TypeAlias = (
    ApiV1CommentImportComments400Error1
    | ApiV1CommentImportComments401Error1
    | ApiV1CommentImportComments403Error1
    | ApiV1CommentImportComments404Error1
    | ApiV1CommentImportComments429Error1
    | ApiV1CommentImportComments500Error1
    | ApiV1CommentImportComments502Error1
    | ApiV1CommentImportComments503Error1
    | ApiV1CommentImportComments504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _CommentImportGetFetchedCommentsError:
    def map(self, status_code: int, content: bytes) -> CommentImportGetFetchedCommentsErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1CommentImportComments400Error1](content)
            case 401:
                return decode_json[ApiV1CommentImportComments401Error1](content)
            case 403:
                return decode_json[ApiV1CommentImportComments403Error1](content)
            case 404:
                return decode_json[ApiV1CommentImportComments404Error1](content)
            case 429:
                return decode_json[ApiV1CommentImportComments429Error1](content)
            case 500:
                return decode_json[ApiV1CommentImportComments500Error1](content)
            case 502:
                return decode_json[ApiV1CommentImportComments502Error1](content)
            case 503:
                return decode_json[ApiV1CommentImportComments503Error1](content)
            case 504:
                return decode_json[ApiV1CommentImportComments504Error1](content)
            case _:
                return RawError(status_code, content)


comment_import_get_fetched_comments_error_mapper: Final[
    ErrorMapper[CommentImportGetFetchedCommentsErrorBody]
] = _CommentImportGetFetchedCommentsError()
