from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class LinkJiraIssueDto(SdkBaseModel):
    issue_id: str = Field(alias="issueId")


class LinkJiraIssueDtoDict(TypedDict):
    issue_id: str
