from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PutResourcePolicyInput(SdkBaseModel):
    policy: str
    """A JSON-formatted resource policy. For more information, see Sharing a Project and Sharing a Report Group in the
    CodeBuild User Guide."""

    resource_arn: str = Field(alias="resourceArn")
    """The ARN of the Project or ReportGroup resource you want to associate with a resource policy."""


class PutResourcePolicyInputDict(TypedDict):
    policy: str
    resource_arn: str
