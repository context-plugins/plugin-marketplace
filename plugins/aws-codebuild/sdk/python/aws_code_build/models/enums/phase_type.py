from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PhaseType(str, Enum):
    """The name of the build phase. Valid values include: BUILD Core build activities typically occur in this build
    phase. COMPLETED The build has been completed. DOWNLOAD_SOURCE Source code is being downloaded in this build phase.
    FINALIZING The build process is completing in this build phase. INSTALL Installation activities typically occur in
    this build phase. POST_BUILD Post-build activities typically occur in this build phase. PRE_BUILD Pre-build
    activities typically occur in this build phase. PROVISIONING The build environment is being set up. QUEUED The build
    has been submitted and is queued be"""

    SUBMITTED = "SUBMITTED"
    QUEUED = "QUEUED"
    PROVISIONING = "PROVISIONING"
    DOWNLOAD_SOURCE = "DOWNLOAD_SOURCE"
    INSTALL = "INSTALL"
    PRE_BUILD = "PRE_BUILD"
    BUILD = "BUILD"
    POST_BUILD = "POST_BUILD"
    UPLOAD_ARTIFACTS = "UPLOAD_ARTIFACTS"
    FINALIZING = "FINALIZING"
    COMPLETED = "COMPLETED"

    __str__ = str.__str__


PhaseTypeOrStr: TypeAlias = Annotated[PhaseType | str, open_enum_validator(PhaseType)]
