from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bucket_owner_access import BucketOwnerAccessOrStr


class BuildArtifacts(SdkBaseModel):
    location: Optional[str] = UNSET
    """Information about the location of the build artifacts."""

    sha256sum: Optional[str] = UNSET
    """The SHA-256 hash of the build artifact. You can use this hash along with a checksum tool to confirm file
    integrity and authenticity. This value is available only if the build project's packaging value is set to ZIP."""

    md5sum: Optional[str] = UNSET
    """The MD5 hash of the build artifact. You can use this hash along with a checksum tool to confirm file integrity
    and authenticity. This value is available only if the build project's packaging value is set to ZIP."""

    override_artifact_name: Optional[bool] = Field(default=UNSET, alias="overrideArtifactName")
    """If this flag is set, a name specified in the buildspec file overrides the artifact name. The name specified in a
    buildspec file is calculated at build time and uses the Shell Command Language. For example, you can append a date
    and time to your artifact name so that it is always unique."""

    encryption_disabled: Optional[bool] = Field(default=UNSET, alias="encryptionDisabled")
    """Information that tells you if encryption for build artifacts is disabled."""

    artifact_identifier: Optional[str] = Field(default=UNSET, alias="artifactIdentifier")
    """An identifier for this artifact definition."""

    bucket_owner_access: Optional[BucketOwnerAccessOrStr] = Field(default=UNSET, alias="bucketOwnerAccess")


class BuildArtifactsDict(TypedDict):
    location: NotRequired[str]
    sha256sum: NotRequired[str]
    md5sum: NotRequired[str]
    override_artifact_name: NotRequired[bool]
    encryption_disabled: NotRequired[bool]
    artifact_identifier: NotRequired[str]
    bucket_owner_access: NotRequired[BucketOwnerAccessOrStr]
