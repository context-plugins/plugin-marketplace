from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BuildType(str, Enum):
    """Specifies the type of build this webhook will trigger. RUNNER_BUILDKITE_BUILD is only available for NO_SOURCE
    source type projects configured for Buildkite runner builds. For more information about CodeBuild-hosted Buildkite
    runner builds, see Tutorial: Configure a CodeBuild-hosted Buildkite runner in the CodeBuild user guide."""

    BUILD = "BUILD"
    BUILD_BATCH = "BUILD_BATCH"
    RUNNER_BUILDKITE_BUILD = "RUNNER_BUILDKITE_BUILD"

    __str__ = str.__str__


BuildTypeOrStr: TypeAlias = Annotated[BuildType | str, open_enum_validator(BuildType)]
