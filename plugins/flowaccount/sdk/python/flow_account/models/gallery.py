from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .journal_entry import JournalEntry, JournalEntryDict
from .media import Media, MediaDict
from .product_list import ProductList, ProductListDict
from .receivable_invoice import ReceivableInvoice, ReceivableInvoiceDict
from .supplier_invoice import SupplierInvoice, SupplierInvoiceDict


class Gallery(SdkBaseModel):
    id: Optional[int] = UNSET
    name: OptionalNullable[str] = UNSET
    description: OptionalNullable[str] = UNSET
    product_list: OptionalNullable[list[ProductList]] = Field(default=UNSET, alias="productList")
    media: OptionalNullable[list[Media]] = UNSET
    journal_entry: OptionalNullable[list[JournalEntry]] = Field(default=UNSET, alias="journalEntry")
    receivable_invoice: OptionalNullable[list[ReceivableInvoice]] = Field(default=UNSET, alias="receivableInvoice")
    supplier_invoice: OptionalNullable[list[SupplierInvoice]] = Field(default=UNSET, alias="supplierInvoice")


class GalleryDict(TypedDict):
    id: NotRequired[int]
    name: NotRequired[str | None]
    description: NotRequired[str | None]
    product_list: NotRequired[list[ProductListDict] | None]
    media: NotRequired[list[MediaDict] | None]
    journal_entry: NotRequired[list[JournalEntryDict] | None]
    receivable_invoice: NotRequired[list[ReceivableInvoiceDict] | None]
    supplier_invoice: NotRequired[list[SupplierInvoiceDict] | None]
