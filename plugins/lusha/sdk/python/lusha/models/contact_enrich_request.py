from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ContactEnrichRequest(SdkBaseModel):
    request_id: str = Field(alias="requestId")
    """The requestId generated in the Prospecting Search response (UUID)"""

    contact_ids: list[str] = Field(alias="contactIds")
    """An array containing the contact IDs for enrichment. Min 1, max 100."""

    reveal_emails: Optional[bool] = Field(default=UNSET, alias="revealEmails")
    """Set ``revealEmails=true`` to retrieve only the email address of the contact. Only available to customers on the
    **Unified Credits** pricing plan."""

    reveal_phones: Optional[bool] = Field(default=UNSET, alias="revealPhones")
    """Set ``revealPhones=true`` to retrieve only the phone number of the contact. Only available to customers on the
    **Unified Credits** pricing plan."""


class ContactEnrichRequestDict(TypedDict):
    request_id: str
    contact_ids: list[str]
    reveal_emails: NotRequired[bool]
    reveal_phones: NotRequired[bool]
