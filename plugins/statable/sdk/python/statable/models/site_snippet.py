from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SiteSnippet(SdkBaseModel):
    site_id: int
    script_url: str
    snippet: str
    """The tag to paste, ready as it stands — install it verbatim rather than rebuilding it from ``script_url``. A hobby
    site's tag carries a ``data-id`` attribute as well: its script is a ``/t/`` bundle addressed by hash, and that
    attribute is the only place the counter inside it can read the site id. A tag for a paid site needs no
    attributes."""


class SiteSnippetDict(TypedDict):
    site_id: int
    script_url: str
    snippet: str
