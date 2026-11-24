from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class TagsGetResponse(SdkBaseModel):
    """Response body for GET /support/v1/tickets/{ticketId}/tags. Contains the current tags visible to the caller."""

    tags: Optional[list[str]] = UNSET
    """Ticket tags, filtered by caller type. DoiT employee (doer) callers receive the full tag set verbatim, including
    internal namespaces (e.g. ``tier/*``, ``synapse_*``). Customer callers receive only tags under the ``customer_tag/``
    namespace, with that prefix stripped. Always present; empty array when the caller has no visible tags."""


class TagsGetResponseDict(TypedDict):
    tags: NotRequired[list[str]]
