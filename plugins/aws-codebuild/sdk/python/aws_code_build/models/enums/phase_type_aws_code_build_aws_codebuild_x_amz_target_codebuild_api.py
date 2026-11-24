from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi(str, Enum):
    """The name of the batch build phase. Valid values include: COMBINE_ARTIFACTS Build output artifacts are being
    combined and uploaded to the output location. DOWNLOAD_BATCHSPEC The batch build specification is being downloaded.
    FAILED One or more of the builds failed. IN_PROGRESS The batch build is in progress. STOPPED The batch build was
    stopped. SUBMITTED The btach build has been submitted. SUCCEEDED The batch build succeeded."""

    SUBMITTED = "SUBMITTED"
    DOWNLOAD_BATCHSPEC = "DOWNLOAD_BATCHSPEC"
    IN_PROGRESS = "IN_PROGRESS"
    COMBINE_ARTIFACTS = "COMBINE_ARTIFACTS"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    STOPPED = "STOPPED"

    __str__ = str.__str__


PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiOrStr: TypeAlias = Annotated[
    PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi | str,
    open_enum_validator(PhaseTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi),
]
