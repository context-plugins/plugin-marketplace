from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.format import FormatOrStr
from .enums.sorting import SortingOrStr


class DocRequest1(SdkBaseModel):
    content: str
    """markdown, MDX or JSON content used to update the document."""

    format: Optional[FormatOrStr] = UNSET
    """OPTIONAL. Specify the format of the content. Default is markdown. Use mdx when the content contains JSX-style
    Archbee components (<hint>, <CtaButton />, <Tabs>); directive-style components (:::hint{type="info"}) work in both
    markdown and mdx."""

    title: Optional[str] = UNSET
    """OPTIONAL, set the name of the document."""

    description: Optional[str] = UNSET
    """OPTIONAL, set the description of the document."""

    preview_img_url: Optional[str] = Field(default=UNSET, alias="previewImgURL")
    """OPTIONAL, set the preview image URL of the document."""

    slug: Optional[str] = UNSET
    """OPTIONAL, set the slug (url key) of the document."""

    alias: Optional[str] = UNSET
    """OPTIONAL, set the url alias."""

    conditional_rule_id: Optional[str] = Field(default=UNSET, alias="conditionalRuleId")
    """OPTIONAL, set the conditional rule id."""

    sorting: Optional[SortingOrStr] = UNSET
    """OPTIONAL. Specify the type of ordering for document insertion."""

    hidden: Optional[bool] = UNSET
    """OPTIONAL, set document as hidden or not."""

    doc_id: Optional[str] = Field(default=UNSET, alias="docId")
    """OPTIONAL, document id. If present and valid, the doc will be updated."""

    parent_doc_id: Optional[str] = Field(default=UNSET, alias="parentDocId")
    """OPTIONAL, parent document id. If present and valid, the parent docId will be updated. If sent empty, the document
    will be moved to the root of the tree."""


class DocRequest1Dict(TypedDict):
    content: str
    format: NotRequired[FormatOrStr]
    title: NotRequired[str]
    description: NotRequired[str]
    preview_img_url: NotRequired[str]
    slug: NotRequired[str]
    alias: NotRequired[str]
    conditional_rule_id: NotRequired[str]
    sorting: NotRequired[SortingOrStr]
    hidden: NotRequired[bool]
    doc_id: NotRequired[str]
    parent_doc_id: NotRequired[str]
