from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class ValueReceiptDetail(SdkBaseModel):
    id: str
    status: str
    public_url_token: str = Field(alias="publicUrlToken")
    public_url: str = Field(alias="publicUrl")
    is_published: bool = Field(alias="isPublished")
    customer_id: str | None = Field(alias="customerId")
    customer_name: str | None = Field(alias="customerName")
    customer_external_id: str | None = Field(alias="customerExternalId")
    order_id: str | None = Field(alias="orderId")
    product_id: str | None = Field(alias="productId")
    currency: str
    start_date: RFC3339DateTime | None = Field(alias="startDate")
    end_date: RFC3339DateTime | None = Field(alias="endDate")
    total_delivered_value: float | None = Field(alias="totalDeliveredValue")
    archived_at: RFC3339DateTime | None = Field(alias="archivedAt")
    created_at: RFC3339DateTime = Field(alias="createdAt")
    published_at: RFC3339DateTime | None = Field(alias="publishedAt")
    publish_expires_at: RFC3339DateTime | None = Field(alias="publishExpiresAt")
    allow_embed: bool = Field(alias="allowEmbed")


class ValueReceiptDetailDict(TypedDict):
    id: str
    status: str
    public_url_token: str
    public_url: str
    is_published: bool
    customer_id: str | None
    customer_name: str | None
    customer_external_id: str | None
    order_id: str | None
    product_id: str | None
    currency: str
    start_date: RFC3339DateTime | None
    end_date: RFC3339DateTime | None
    total_delivered_value: float | None
    archived_at: RFC3339DateTime | None
    created_at: RFC3339DateTime
    published_at: RFC3339DateTime | None
    publish_expires_at: RFC3339DateTime | None
    allow_embed: bool
