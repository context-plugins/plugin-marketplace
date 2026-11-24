from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class JiraIssueLink(SdkBaseModel):
    issue_id: str = Field(alias="issueId")


class JiraIssueLinkDict(TypedDict):
    issue_id: str
