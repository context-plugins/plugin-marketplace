from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .session_template import SessionTemplate, SessionTemplateDict


class ListSessionTemplatesResponse(SdkBaseModel):
    """A list of session templates."""

    session_templates: Optional[list[SessionTemplate]] = Field(default=UNSET, alias="sessionTemplates")
    """Output only. Session template list"""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as page_token to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class ListSessionTemplatesResponseDict(TypedDict):
    session_templates: NotRequired[list[SessionTemplateDict]]
    next_page_token: NotRequired[str]
