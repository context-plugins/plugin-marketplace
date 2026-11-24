from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class BatchGetProjectsInput(SdkBaseModel):
    names: list[str]
    """The names or ARNs of the build projects. To get information about a project shared with your Amazon Web Services
    account, its ARN must be specified. You cannot specify a shared project using its name."""


class BatchGetProjectsInputDict(TypedDict):
    names: list[str]
