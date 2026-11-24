from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class WorkflowType(SdkBaseModel):
    name: str
    """The name of the workflow type. The combination of workflow type name and version must be unique with in a
    domain."""

    version: str
    """The version of the workflow type. The combination of workflow type name and version must be unique with in a
    domain."""


class WorkflowTypeDict(TypedDict):
    name: str
    version: str
