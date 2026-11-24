from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class NamespaceType(str, Enum):
    """Along with path and name, the pattern that CodeBuild uses to determine the name and location to store the output
    artifact: If type is set to CODEPIPELINE, CodePipeline ignores this value if specified. This is because CodePipeline
    manages its build output names instead of CodeBuild. If type is set to NO_ARTIFACTS, this value is ignored if
    specified, because no build output is produced. If type is set to S3, valid values include: BUILD_ID: Include the
    build ID in the location of the build output artifact. NONE: Do not include the build ID. This is the default if
    namespaceType is not specified. F"""

    NONE = "NONE"
    BUILD_ID = "BUILD_ID"

    __str__ = str.__str__


NamespaceTypeOrStr: TypeAlias = Annotated[NamespaceType | str, open_enum_validator(NamespaceType)]
