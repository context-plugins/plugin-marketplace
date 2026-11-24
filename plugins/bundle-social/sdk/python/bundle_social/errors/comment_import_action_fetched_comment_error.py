from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.api_v1_comment_import_comments_action400_error1 import ApiV1CommentImportCommentsAction400Error1
from ..models.api_v1_comment_import_comments_action401_error1 import ApiV1CommentImportCommentsAction401Error1
from ..models.api_v1_comment_import_comments_action403_error1 import ApiV1CommentImportCommentsAction403Error1
from ..models.api_v1_comment_import_comments_action404_error1 import ApiV1CommentImportCommentsAction404Error1
from ..models.api_v1_comment_import_comments_action429_error1 import ApiV1CommentImportCommentsAction429Error1
from ..models.api_v1_comment_import_comments_action500_error1 import ApiV1CommentImportCommentsAction500Error1
from ..models.api_v1_comment_import_comments_action502_error1 import ApiV1CommentImportCommentsAction502Error1
from ..models.api_v1_comment_import_comments_action503_error1 import ApiV1CommentImportCommentsAction503Error1
from ..models.api_v1_comment_import_comments_action504_error1 import ApiV1CommentImportCommentsAction504Error1

CommentImportActionFetchedCommentErrorBody: TypeAlias = (
    ApiV1CommentImportCommentsAction400Error1
    | ApiV1CommentImportCommentsAction401Error1
    | ApiV1CommentImportCommentsAction403Error1
    | ApiV1CommentImportCommentsAction404Error1
    | ApiV1CommentImportCommentsAction429Error1
    | ApiV1CommentImportCommentsAction500Error1
    | ApiV1CommentImportCommentsAction502Error1
    | ApiV1CommentImportCommentsAction503Error1
    | ApiV1CommentImportCommentsAction504Error1
    | RawError
)


@dataclass(frozen=True, slots=True)
class _CommentImportActionFetchedCommentError:
    def map(self, status_code: int, content: bytes) -> CommentImportActionFetchedCommentErrorBody:
        match status_code:
            case 400:
                return decode_json[ApiV1CommentImportCommentsAction400Error1](content)
            case 401:
                return decode_json[ApiV1CommentImportCommentsAction401Error1](content)
            case 403:
                return decode_json[ApiV1CommentImportCommentsAction403Error1](content)
            case 404:
                return decode_json[ApiV1CommentImportCommentsAction404Error1](content)
            case 429:
                return decode_json[ApiV1CommentImportCommentsAction429Error1](content)
            case 500:
                return decode_json[ApiV1CommentImportCommentsAction500Error1](content)
            case 502:
                return decode_json[ApiV1CommentImportCommentsAction502Error1](content)
            case 503:
                return decode_json[ApiV1CommentImportCommentsAction503Error1](content)
            case 504:
                return decode_json[ApiV1CommentImportCommentsAction504Error1](content)
            case _:
                return RawError(status_code, content)


comment_import_action_fetched_comment_error_mapper: Final[
    ErrorMapper[CommentImportActionFetchedCommentErrorBody]
] = _CommentImportActionFetchedCommentError()
