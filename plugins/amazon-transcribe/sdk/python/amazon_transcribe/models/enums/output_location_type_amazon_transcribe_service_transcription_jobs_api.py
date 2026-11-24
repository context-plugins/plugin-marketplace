from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi(str, Enum):
    """Indicates where the specified transcription output is stored. If the value is CUSTOMER_BUCKET, the location is
    the Amazon S3 bucket you specified using the OutputBucketName parameter in your request. If you also included
    OutputKey in your request, your output is located in the path you specified in your request. If the value is
    SERVICE_BUCKET, the location is a service-managed Amazon S3 bucket. To access a transcript stored in a
    service-managed bucket, use the URI shown in the TranscriptFileUri or RedactedTranscriptFileUri field."""

    CUSTOMER_BUCKET = "CUSTOMER_BUCKET"
    SERVICE_BUCKET = "SERVICE_BUCKET"

    __str__ = str.__str__


OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApiOrStr: TypeAlias = Annotated[
    OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi | str,
    open_enum_validator(OutputLocationTypeAmazonTranscribeServiceTranscriptionJobsApi),
]
