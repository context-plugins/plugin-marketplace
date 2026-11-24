from __future__ import annotations

from dataclasses import dataclass
from typing import Final, TypeAlias

from ..core import ErrorMapper, RawError, decode_json
from ..models.error_response import ErrorResponse
from ..models.http_validation_error import HttpValidationError

PublishJobV2JobsJobIdPublishPostErrorBody: TypeAlias = ErrorResponse | HttpValidationError | RawError


@dataclass(frozen=True, slots=True)
class _PublishJobV2JobsJobIdPublishPostError:
    def map(self, status_code: int, content: bytes) -> PublishJobV2JobsJobIdPublishPostErrorBody:
        match status_code:
            case 400 | 401 | 403 | 404 | 409 | 429 | 503:
                return decode_json[ErrorResponse](content)
            case 422:
                return decode_json[HttpValidationError](content)
            case _:
                return RawError(status_code, content)


publish_job_v2_jobs_job_id_publish_post_error_mapper: Final[
    ErrorMapper[PublishJobV2JobsJobIdPublishPostErrorBody]
] = _PublishJobV2JobsJobIdPublishPostError()
