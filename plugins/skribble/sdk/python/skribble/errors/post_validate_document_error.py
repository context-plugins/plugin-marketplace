from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.problem_skribble_additional_information_api import ProblemSkribbleAdditionalInformationApi

PostValidateDocumentErrorBody: TypeAlias = ProblemSkribbleAdditionalInformationApi | RawError


@dataclass(frozen=True, slots=True)
class _PostValidateDocumentError:
    def map(self, status_code: int, content: bytes) -> PostValidateDocumentErrorBody:
        match status_code:
            case 400 | 401 | 403 | 413 | 415 | 429 | 500 | 503:
                return decode_json[ProblemSkribbleAdditionalInformationApi](content)
            case _:
                return RawError(status_code, content)


post_validate_document_error_mapper: Final[ErrorMapper[PostValidateDocumentErrorBody]] = _PostValidateDocumentError()
