from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type6(str, Enum):
    """The type of build output artifact. Valid values include: CODEPIPELINE: The build project has build output
    generated through CodePipeline. The CODEPIPELINE type is not supported for secondaryArtifacts. NO_ARTIFACTS: The
    build project does not produce any build output. S3: The build project stores build output in Amazon S3."""

    CODEPIPELINE = "CODEPIPELINE"
    S3 = "S3"
    NO_ARTIFACTS = "NO_ARTIFACTS"

    __str__ = str.__str__


Type6OrStr: TypeAlias = Annotated[Type6 | str, open_enum_validator(Type6)]
