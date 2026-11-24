from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .category1 import Category1, Category1Dict
from .location1 import Location1, Location1Dict
from .merchant1 import Merchant1, Merchant1Dict


class DataEnrichApi(SdkBaseModel):
    """Container object, containing enrich details."""

    merchant: Optional[Merchant1] = UNSET
    category: Optional[Category1] = UNSET
    location: Optional[Location1] = UNSET
    tags: Optional[list[str]] = UNSET
    """This field contains an array of strings, each representing a specific tag for the transaction. The format of each
    string should be ``tag_name:tag_value``, where ``tag_name`` defines the type of transaction (e.g., ``card``,
    ``income``, ``mortgage``), and ``tag_value`` provides additional details (e.g., "card:4615"). The tags help classify
    and identify transactions based on various criteria.

      - card:4615
      - conduct:card
      - conduct:overdrawn
      - conduct:cheque
      - conduct:atm
      - conduct:currency
      - conduct:late
      - conduct:admin
      - conduct:dishonour
      - conduct:interest
      - governmentPayment:centrelink
      - governmentPayment:centrelinkCarers
      - governmentPayment:crisisSupport
      - governmentPayment:education
      - governmentPayment:familyAllowance
      - governmentPayment:jobseekerPymt
      - governmentPayment:medicare
      - governmentPayment:newstart
      - governmentPayment:pension
      - governmentPayment:rentalAssistance
      - governmentPayment:vetAffairs
      - governmentPayment:youthAllowance
      - governmentPayment:familyTaxBenefit
      - governmentPayment:other
      - governmentPayment:childCareSubsidy
      - governmentPayment:parentalLeavePymt
      - governmentPayment:parentingPymt
      - governmentPayment:other
      - governmentPayment:pensionerEducationSupplement
      - governmentPayment:farmAllowance
      - governmentPayment:disasterPymt
      - governmentPayment:other
      - income:childSupport
      - income:insurance
      - income:investment
      - income:rent
      - income:salary
      - income:superannuation
      - liability:afterpay
      - liability:arl collect pty ltd
      - liability:australian recoveries
      - liability:axess
      - liability:azora
      - liability:baycorp
      - liability:beforepay
      - liability:brighte
      - liability:bundll
      - liability:cash converters
      - liability:cash direct
      - liability:cashngo
      - liability:cash stop
      - liability:cash train
      - liability:ccc
      - liability:cfmg pty ltd
      - liability:charter mercantile
      - liability:cigno
      - liability:collectau
      - liability:collection house
      - liability:complete credit solutions
      - liability:credit collection services
      - liability:credit corp
      - liability:creditline
      - liability:deferit
      - liability:dun and bradstreet
      - liability:earnd
      - liability:edstart
      - liability:finance one
      - liability:fundo
      - liability:fupay
      - liability:gem visa
      - liability:humm
      - liability:indebted
      - liability:klarna
      - liability:latitude
      - liability:laybuy
      - liability:limepay
      - liability:lion finance
      - liability:money3
      - liability:moneyloop
      - liability:mypaynow
      - liability:nimble
      - liability:nine25
      - liability:openpay
      - liability:panthera
      - liability:payitlater
      - liability:payright
      - liability:pioneer credit
      - liability:plenti
      - liability:probe
      - liability:q card
      - liability:quickapay
      - liability:spotmenow
      - liability:sunshine loans
      - liability:tapmypay
      - liability:wagetap
      - liability:wallet wizard
      - liability:zip pay
      - third-party:apple pay
      - third-party:google
      - third-party:paypal
      - third-party:sp
      - third-party:sq
      - creditCard:creditCard
      - expense:rent
      - loan:loan repayment
      - mortgage:afg home loans
      - mortgage:aims
      - mortgage:amo group
      - mortgage:athena
      - mortgage:aussie
      - mortgage:bluestone
      - mortgage:clickloans
      - mortgage:emoney
      - mortgage:express reverse mortgage
      - mortgage:firstmac
      - mortgage:fox symes
      - mortgage:freedom lend
      - mortgage:freedom loans
      - mortgage:funding
      - mortgage:heartland reverse mortgages
      - mortgage:homeloans
      - mortgage:homestar
      - mortgage:homestart
      - mortgage:household capital
      - mortgage:illawarra home loans
      - mortgage:keystart
      - mortgage:la trobe financial
      - mortgage:liberty financial
      - mortgage:loans
      - mortgage:mortgage house
      - mortgage:mortgage offset
      - mortgage:mortgageport
      - mortgage:mortgage repayment
      - mortgage:onetwo
      - mortgage:online home loans
      - mortgage:pacific mortgage group
      - mortgage:pepper money
      - mortgage:qantas money
      - mortgage:reduce home loans
      - mortgage:resi
      - mortgage:resimac
      - mortgage:sucasa
      - mortgage:switzer home loans
      - mortgage:ticToc
      - mortgage:unloan
      - mortgage:vmg
      - mortgage:well money"""


class DataEnrichApiDict(TypedDict):
    merchant: NotRequired[Merchant1Dict]
    category: NotRequired[Category1Dict]
    location: NotRequired[Location1Dict]
    tags: NotRequired[list[str]]
