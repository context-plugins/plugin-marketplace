from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1InvoicegeneratorRequest(SdkBaseModel):
    invoice_number: str = Field(alias="invoiceNumber")
    """The invoice number"""

    date: Optional[str] = UNSET
    """The invoice date (YYYY-MM-DD format)"""

    from_name: str
    """The name of the person or company issuing the invoice"""

    from_street: str
    """The street address of the person or company issuing the invoice"""

    from_city: str
    """The city of the person or company issuing the invoice"""

    from_state: str
    """The state of the person or company issuing the invoice"""

    from_zip: str
    """The zip code of the person or company issuing the invoice"""

    to_name: str
    """The name of the person or company being invoiced"""

    to_street: str
    """The street address of the person or company being invoiced"""

    to_city: str
    """The city of the person or company being invoiced"""

    to_state: str
    """The state of the person or company being invoiced"""

    to_zip: str
    """The zip code of the person or company being invoiced"""

    job: Optional[str] = UNSET
    """The job or project associated with the invoice"""

    payment_terms: Optional[str] = Field(default=UNSET, alias="paymentTerms")
    """The payment terms for the invoice"""

    due_date: Optional[str] = Field(default=UNSET, alias="dueDate")
    """The due date for the invoice (YYYY-MM-DD format)"""

    discount: Optional[float] = UNSET
    """The discount to be applied to the invoice"""

    sales_tax: Optional[float] = Field(default=UNSET, alias="salesTax")
    """The sales tax rate for the invoice as a percentage, applied to the subtotal after discount (e.g. 7.5 for 7.5%)"""

    logo_url: Optional[str] = Field(default=UNSET, alias="logoURL")
    """Public http(s) URL of an image to use as the invoice logo (max 2 MB, fetched with a 5 second timeout; a
    placeholder logo is used if it can't be loaded)"""

    currency: Optional[str] = UNSET
    """The currency for the invoice"""

    items: str
    """The items being invoiced (qty, description, unit_price)"""


class V1InvoicegeneratorRequestDict(TypedDict):
    invoice_number: str
    date: NotRequired[str]
    from_name: str
    from_street: str
    from_city: str
    from_state: str
    from_zip: str
    to_name: str
    to_street: str
    to_city: str
    to_state: str
    to_zip: str
    job: NotRequired[str]
    payment_terms: NotRequired[str]
    due_date: NotRequired[str]
    discount: NotRequired[float]
    sales_tax: NotRequired[float]
    logo_url: NotRequired[str]
    currency: NotRequired[str]
    items: str
