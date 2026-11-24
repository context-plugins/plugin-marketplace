from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.bucket_owner_access import BucketOwnerAccessOrStr
from .enums.namespace_type import NamespaceTypeOrStr
from .enums.packaging import PackagingOrStr
from .enums.type6 import Type6OrStr


class ProjectArtifacts(SdkBaseModel):
    type_: Type6OrStr = Field(alias="type")
    """The type of build output artifact. Valid values include: CODEPIPELINE: The build project has build output
    generated through CodePipeline. The CODEPIPELINE type is not supported for secondaryArtifacts. NO_ARTIFACTS: The
    build project does not produce any build output. S3: The build project stores build output in Amazon S3."""

    location: Optional[str] = UNSET
    """Information about the build output artifact location: If type is set to CODEPIPELINE, CodePipeline ignores this
    value if specified. This is because CodePipeline manages its build output locations instead of CodeBuild. If type is
    set to NO_ARTIFACTS, this value is ignored if specified, because no build output is produced. If type is set to S3,
    this is the name of the output bucket."""

    path: Optional[str] = UNSET
    """Along with namespaceType and name, the pattern that CodeBuild uses to name and store the output artifact: If type
    is set to CODEPIPELINE, CodePipeline ignores this value if specified. This is because CodePipeline manages its build
    output names instead of CodeBuild. If type is set to NO_ARTIFACTS, this value is ignored if specified, because no
    build output is produced. If type is set to S3, this is the path to the output artifact. If path is not specified,
    path is not used. For example, if path is set to MyArtifacts, namespaceType is set to NONE, and name is set to
    MyArtifact.zip, the output ar"""

    namespace_type: Optional[NamespaceTypeOrStr] = Field(default=UNSET, alias="namespaceType")
    """Along with path and name, the pattern that CodeBuild uses to determine the name and location to store the output
    artifact: If type is set to CODEPIPELINE, CodePipeline ignores this value if specified. This is because CodePipeline
    manages its build output names instead of CodeBuild. If type is set to NO_ARTIFACTS, this value is ignored if
    specified, because no build output is produced. If type is set to S3, valid values include: BUILD_ID: Include the
    build ID in the location of the build output artifact. NONE: Do not include the build ID. This is the default if
    namespaceType is not specified. F"""

    name: Optional[str] = UNSET
    """Along with path and namespaceType, the pattern that CodeBuild uses to name and store the output artifact: If type
    is set to CODEPIPELINE, CodePipeline ignores this value if specified. This is because CodePipeline manages its build
    output names instead of CodeBuild. If type is set to NO_ARTIFACTS, this value is ignored if specified, because no
    build output is produced. If type is set to S3, this is the name of the output artifact object. If you set the name
    to be a forward slash ("/"), the artifact is stored in the root of the output bucket. For example: If path is set to
    MyArtifacts, namespace"""

    packaging: Optional[PackagingOrStr] = UNSET
    """The type of build output artifact to create: If type is set to CODEPIPELINE, CodePipeline ignores this value if
    specified. This is because CodePipeline manages its build output artifacts instead of CodeBuild. If type is set to
    NO_ARTIFACTS, this value is ignored if specified, because no build output is produced. If type is set to S3, valid
    values include: NONE: CodeBuild creates in the output bucket a folder that contains the build output. This is the
    default if packaging is not specified. ZIP: CodeBuild creates in the output bucket a ZIP file that contains the
    build output."""

    override_artifact_name: Optional[bool] = Field(default=UNSET, alias="overrideArtifactName")
    """If this flag is set, a name specified in the buildspec file overrides the artifact name. The name specified in a
    buildspec file is calculated at build time and uses the Shell Command Language. For example, you can append a date
    and time to your artifact name so that it is always unique."""

    encryption_disabled: Optional[bool] = Field(default=UNSET, alias="encryptionDisabled")
    """Set to true if you do not want your output artifacts encrypted. This option is valid only if your artifacts type
    is Amazon S3. If this is set with another artifacts type, an invalidInputException is thrown."""

    artifact_identifier: Optional[str] = Field(default=UNSET, alias="artifactIdentifier")
    """An identifier for this artifact definition."""

    bucket_owner_access: Optional[BucketOwnerAccessOrStr] = Field(default=UNSET, alias="bucketOwnerAccess")


class ProjectArtifactsDict(TypedDict):
    type_: Type6OrStr
    location: NotRequired[str]
    path: NotRequired[str]
    namespace_type: NotRequired[NamespaceTypeOrStr]
    name: NotRequired[str]
    packaging: NotRequired[PackagingOrStr]
    override_artifact_name: NotRequired[bool]
    encryption_disabled: NotRequired[bool]
    artifact_identifier: NotRequired[str]
    bucket_owner_access: NotRequired[BucketOwnerAccessOrStr]
