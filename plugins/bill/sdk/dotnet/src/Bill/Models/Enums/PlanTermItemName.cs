using System;
using System.Text.Json.Serialization;
using Bill.Core.Enum;

namespace Bill.Models.Enums;

/// <summary>
/// The enum plan term item name.
/// </summary>
[JsonConverter(typeof(StringEnumConverter<PlanTermItemName>))]
public sealed record PlanTermItemName : OpenStringEnum<PlanTermItemName>
{
    private PlanTermItemName(string value) : base(value)
    {
    }

    public static readonly PlanTermItemName Users = new("users");

    public static readonly PlanTermItemName Credit = new("credit");

    public static readonly PlanTermItemName Debit = new("debit");

    public static readonly PlanTermItemName Documents = new("documents");

    public static readonly PlanTermItemName CheckUs = new("check_US");

    public static readonly PlanTermItemName ConsoleUser = new("consoleUser");

    public static readonly PlanTermItemName Company = new("company");

    public static readonly PlanTermItemName CheckNonUs = new("check_NonUS");

    public static readonly PlanTermItemName EPayment = new("ePayment");

    public static readonly PlanTermItemName Fax = new("fax");

    public static readonly PlanTermItemName ZenBill = new("zenBill");

    public static readonly PlanTermItemName RecvdEPayment = new("recvdEPayment");

    public static readonly PlanTermItemName Ar = new("AR");

    public static readonly PlanTermItemName PayPal = new("PayPal");

    public static readonly PlanTermItemName MailInvoices = new("mailInvoices");

    public static readonly PlanTermItemName SupportChat = new("supportChat");

    public static readonly PlanTermItemName SupportEmail = new("supportEmail");

    public static readonly PlanTermItemName SupportPhone = new("supportPhone");

    public static readonly PlanTermItemName SyncPremium = new("syncPremium");

    public static readonly PlanTermItemName CustomRoles = new("customRoles");

    public static readonly PlanTermItemName TrainingLvl1 = new("trainingLvl1");

    public static readonly PlanTermItemName TrainingLvl2 = new("trainingLvl2");

    public static readonly PlanTermItemName TrainingLvl3 = new("trainingLvl3");

    public static readonly PlanTermItemName AcctMgmtLvl1 = new("acctMgmtLvl1");

    public static readonly PlanTermItemName AcctMgmtLvl2 = new("acctMgmtLvl2");

    public static readonly PlanTermItemName AcctMgmtLvl3 = new("acctMgmtLvl3");

    public static readonly PlanTermItemName DemoAccounts = new("demoAccounts");

    public static readonly PlanTermItemName CentralBilling = new("centralBilling");

    public static readonly PlanTermItemName FirmBranding = new("firmBranding");

    public static readonly PlanTermItemName SalesTools = new("salesTools");

    public static readonly PlanTermItemName MultipleModules = new("multipleModules");

    public static readonly PlanTermItemName ConsoleCompany = new("consoleCompany");

    public static readonly PlanTermItemName AccountantUser = new("accountantUser");

    public static readonly PlanTermItemName UnlimitedConsoles = new("unlimitedConsoles");

    public static readonly PlanTermItemName Discount = new("discount");

    public static readonly PlanTermItemName RemoteCheckDeposit = new("remoteCheckDeposit");

    public static readonly PlanTermItemName XeroSync = new("xeroSync");

    public static readonly PlanTermItemName ApprovalPolicy = new("approvalPolicy");

    public static readonly PlanTermItemName FeatureUser = new("featureUser");

    public static readonly PlanTermItemName ApprovalUser = new("approvalUser");

    public static readonly PlanTermItemName Netsuite2 = new("netsuite2");

    public static readonly PlanTermItemName Intacct = new("intacct");

    public static readonly PlanTermItemName Salesforce = new("salesforce");

    public static readonly PlanTermItemName FasterPaymentCheckOvernight = new("fasterPayment_checkOvernight");

    public static readonly PlanTermItemName FasterPaymentCheck2Day = new("fasterPayment_check2Day");

    public static readonly PlanTermItemName FasterPaymentCheck3Day = new("fasterPayment_check3Day");

    public static readonly PlanTermItemName FasterPaymentAch = new("fasterPayment_ach");

    public static readonly PlanTermItemName FasterPaymentRpps = new("fasterPayment_rpps");

    public static readonly PlanTermItemName ApLvl1 = new("apLvl1");

    public static readonly PlanTermItemName ApLvl2 = new("apLvl2");

    public static readonly PlanTermItemName ApLvl3 = new("apLvl3");

    public static readonly PlanTermItemName ArLvl1 = new("arLvl1");

    public static readonly PlanTermItemName ArLvl2 = new("arLvl2");

    public static readonly PlanTermItemName ArLvl3 = new("arLvl3");

    public static readonly PlanTermItemName Qbe = new("qbe");

    public static readonly PlanTermItemName DesBill = new("desBill");

    public static readonly PlanTermItemName OlbUser = new("OLBUser");

    public static readonly PlanTermItemName CollaboratorUser = new("collaboratorUser");

    public static readonly PlanTermItemName IntlEPmtUsdWire = new("intlEPmtUSDWire");

    public static readonly PlanTermItemName IntlEPmtFxWire = new("intlEPmtFxWire");

    public static readonly PlanTermItemName IntlEPmtFxIach = new("intlEPmtFxIACH");

    public static readonly PlanTermItemName VoidCheck = new("voidCheck");

    public static readonly PlanTermItemName VoidCheckReturned = new("voidCheckReturned");

    public static readonly PlanTermItemName DocUpload = new("docUpload");

    public static readonly PlanTermItemName BillCreated = new("billCreated");

    public static readonly PlanTermItemName OlbUserLastLogin = new("olbUserLastLogin");

    public static readonly PlanTermItemName CollaboratorLastLogin = new("collaboratorLastLogin");

    public static readonly PlanTermItemName InvoiceEmailed = new("invoiceEmailed");

    public static readonly PlanTermItemName Nsf = new("nsf");

    public static readonly PlanTermItemName LastSupportAccess = new("lastSupportAccess");

    public static readonly PlanTermItemName AmexPayment = new("amexPayment");

    public static readonly PlanTermItemName NetSuiteSyncImplementation = new("netSuiteSyncImplementation");

    public static readonly PlanTermItemName IntacctSyncImplementation = new("intacctSyncImplementation");

    public static readonly PlanTermItemName SyncSetup = new("syncSetup");

    public static readonly PlanTermItemName HybridDataEntry = new("hybridDataEntry");

    public static readonly PlanTermItemName VcardPayment = new("vcardPayment");

    public static readonly PlanTermItemName VcardPaymentVoidReissue = new("vcardPaymentVoidReissue");

    public static readonly PlanTermItemName SuaProcessedCount = new("suaProcessedCount");

    public static readonly PlanTermItemName SuaProcessedAmount = new("suaProcessedAmount");

    public static readonly PlanTermItemName SuaReturnedCount = new("suaReturnedCount");

    public static readonly PlanTermItemName SuaReturnedAmount = new("suaReturnedAmount");

    public static readonly PlanTermItemName PremiumSupport = new("premiumSupport");

    public static readonly PlanTermItemName PremiumSupportPlus = new("premiumSupportPlus");

    public static readonly PlanTermItemName ApiLicenseKeyFee = new("apiLicenseKeyFee");

    public static readonly PlanTermItemName ApiUserLicenseFee = new("apiUserLicenseFee");

    public static readonly PlanTermItemName ApiMaintenanceFee = new("apiMaintenanceFee");

    public static readonly PlanTermItemName DeveloperSupportFee = new("developerSupportFee");

    public static readonly PlanTermItemName Implementation = new("implementation");

    public static readonly PlanTermItemName SyncMigration = new("syncMigration");

    public static readonly PlanTermItemName Training = new("training");

    public static readonly PlanTermItemName DocsOnCd = new("docsOnCD");

    public static readonly PlanTermItemName ContractBilling = new("contractBilling");

    public static readonly PlanTermItemName ReceivedCcPaymentCount = new("receivedCCPaymentCount");

    public static readonly PlanTermItemName WalletPmtIntlUsd = new("walletPmt_IntlUSD");

    public static readonly PlanTermItemName WalletPmtIntlFx = new("walletPmt_IntlFX");

    public static readonly PlanTermItemName ImplementationNetSuite = new("implementationNetSuite");

    public static readonly PlanTermItemName ImplementationIntacct = new("implementationIntacct");

    public static readonly PlanTermItemName ImplementationQuickBooksEnterprise = new(
        "implementationQuickBooksEnterprise");

    public static readonly PlanTermItemName ImplementationMicrosoftDynamics = new("implementationMicrosoftDynamics");

    public static readonly PlanTermItemName ImplementationSso = new("implementationSSO");

    public static readonly PlanTermItemName CardFundedEPayment = new("cardFunded_ePayment");

    public static readonly PlanTermItemName CardFundedCheck = new("cardFunded_check");

    public static readonly PlanTermItemName DynamicApprovals = new("dynamicApprovals");

    public static readonly PlanTermItemName SyncImplementation = new("syncImplementation");

    public static readonly PlanTermItemName VCardProcessedCount = new("vCardProcessedCount");

    public static readonly PlanTermItemName VCardProcessedAmount = new("vCardProcessedAmount");

    public static readonly PlanTermItemName VCardReturnedCount = new("vCardReturnedCount");

    public static readonly PlanTermItemName VCardReturnedAmount = new("vCardReturnedAmount");

    public static readonly PlanTermItemName GuestPayEPayment = new("guestPay_ePayment");

    public static readonly PlanTermItemName AuditorUser = new("auditorUser");

    public static readonly PlanTermItemName PayByCardProcessedCount = new("payByCardProcessedCount");

    public static readonly PlanTermItemName PayByCardProcessedAmount = new("payByCardProcessedAmount");

    public static readonly PlanTermItemName PayByCardChargeBackCount = new("payByCardChargeBackCount");

    public static readonly PlanTermItemName PayByCardChargeBackAmount = new("payByCardChargeBackAmount");

    public static readonly PlanTermItemName PayByCardCheckUsCount = new("payByCardCheckUSCount");

    public static readonly PlanTermItemName PayByCardEPaymentCount = new("payByCardEPaymentCount");

    public static readonly PlanTermItemName IntlUsdTransactionCount = new("intlUSDTransactionCount");

    public static readonly PlanTermItemName IntlFxTransactionCount = new("intlFXTransactionCount");

    public static readonly PlanTermItemName IntlFxTransactionAmount = new("intlFXTransactionAmount");

    public static readonly PlanTermItemName NoAccessUser = new("noAccessUser");

    public static readonly PlanTermItemName IntlFxReturnedCount = new("intlFXReturnedCount");

    public static readonly PlanTermItemName IntlFxReturnedAmount = new("intlFXReturnedAmount");

    public static readonly PlanTermItemName FasterPaymentRtp = new("fasterPayment_rtp");

    public static readonly PlanTermItemName CardFundedIntlEPmtUsdWire = new("cardFunded_intlEPmtUSDWire");

    public static readonly PlanTermItemName FasterPaymentVcard = new("fasterPayment_vcard");

    public static readonly PlanTermItemName ApplicableTax = new("applicableTax");

    public static readonly PlanTermItemName Other = new("other");

    public TResult Match<TResult>(Func<TResult> onUsers,
        Func<TResult> onCredit,
        Func<TResult> onDebit,
        Func<TResult> onDocuments,
        Func<TResult> onCheckUs,
        Func<TResult> onConsoleUser,
        Func<TResult> onCompany,
        Func<TResult> onCheckNonUs,
        Func<TResult> onEPayment,
        Func<TResult> onFax,
        Func<TResult> onZenBill,
        Func<TResult> onRecvdEPayment,
        Func<TResult> onAr,
        Func<TResult> onPayPal,
        Func<TResult> onMailInvoices,
        Func<TResult> onSupportChat,
        Func<TResult> onSupportEmail,
        Func<TResult> onSupportPhone,
        Func<TResult> onSyncPremium,
        Func<TResult> onCustomRoles,
        Func<TResult> onTrainingLvl1,
        Func<TResult> onTrainingLvl2,
        Func<TResult> onTrainingLvl3,
        Func<TResult> onAcctMgmtLvl1,
        Func<TResult> onAcctMgmtLvl2,
        Func<TResult> onAcctMgmtLvl3,
        Func<TResult> onDemoAccounts,
        Func<TResult> onCentralBilling,
        Func<TResult> onFirmBranding,
        Func<TResult> onSalesTools,
        Func<TResult> onMultipleModules,
        Func<TResult> onConsoleCompany,
        Func<TResult> onAccountantUser,
        Func<TResult> onUnlimitedConsoles,
        Func<TResult> onDiscount,
        Func<TResult> onRemoteCheckDeposit,
        Func<TResult> onXeroSync,
        Func<TResult> onApprovalPolicy,
        Func<TResult> onFeatureUser,
        Func<TResult> onApprovalUser,
        Func<TResult> onNetsuite2,
        Func<TResult> onIntacct,
        Func<TResult> onSalesforce,
        Func<TResult> onFasterPaymentCheckOvernight,
        Func<TResult> onFasterPaymentCheck2Day,
        Func<TResult> onFasterPaymentCheck3Day,
        Func<TResult> onFasterPaymentAch,
        Func<TResult> onFasterPaymentRpps,
        Func<TResult> onApLvl1,
        Func<TResult> onApLvl2,
        Func<TResult> onApLvl3,
        Func<TResult> onArLvl1,
        Func<TResult> onArLvl2,
        Func<TResult> onArLvl3,
        Func<TResult> onQbe,
        Func<TResult> onDesBill,
        Func<TResult> onOlbUser,
        Func<TResult> onCollaboratorUser,
        Func<TResult> onIntlEPmtUsdWire,
        Func<TResult> onIntlEPmtFxWire,
        Func<TResult> onIntlEPmtFxIach,
        Func<TResult> onVoidCheck,
        Func<TResult> onVoidCheckReturned,
        Func<TResult> onDocUpload,
        Func<TResult> onBillCreated,
        Func<TResult> onOlbUserLastLogin,
        Func<TResult> onCollaboratorLastLogin,
        Func<TResult> onInvoiceEmailed,
        Func<TResult> onNsf,
        Func<TResult> onLastSupportAccess,
        Func<TResult> onAmexPayment,
        Func<TResult> onNetSuiteSyncImplementation,
        Func<TResult> onIntacctSyncImplementation,
        Func<TResult> onSyncSetup,
        Func<TResult> onHybridDataEntry,
        Func<TResult> onVcardPayment,
        Func<TResult> onVcardPaymentVoidReissue,
        Func<TResult> onSuaProcessedCount,
        Func<TResult> onSuaProcessedAmount,
        Func<TResult> onSuaReturnedCount,
        Func<TResult> onSuaReturnedAmount,
        Func<TResult> onPremiumSupport,
        Func<TResult> onPremiumSupportPlus,
        Func<TResult> onApiLicenseKeyFee,
        Func<TResult> onApiUserLicenseFee,
        Func<TResult> onApiMaintenanceFee,
        Func<TResult> onDeveloperSupportFee,
        Func<TResult> onImplementation,
        Func<TResult> onSyncMigration,
        Func<TResult> onTraining,
        Func<TResult> onDocsOnCd,
        Func<TResult> onContractBilling,
        Func<TResult> onReceivedCcPaymentCount,
        Func<TResult> onWalletPmtIntlUsd,
        Func<TResult> onWalletPmtIntlFx,
        Func<TResult> onImplementationNetSuite,
        Func<TResult> onImplementationIntacct,
        Func<TResult> onImplementationQuickBooksEnterprise,
        Func<TResult> onImplementationMicrosoftDynamics,
        Func<TResult> onImplementationSso,
        Func<TResult> onCardFundedEPayment,
        Func<TResult> onCardFundedCheck,
        Func<TResult> onDynamicApprovals,
        Func<TResult> onSyncImplementation,
        Func<TResult> onVCardProcessedCount,
        Func<TResult> onVCardProcessedAmount,
        Func<TResult> onVCardReturnedCount,
        Func<TResult> onVCardReturnedAmount,
        Func<TResult> onGuestPayEPayment,
        Func<TResult> onAuditorUser,
        Func<TResult> onPayByCardProcessedCount,
        Func<TResult> onPayByCardProcessedAmount,
        Func<TResult> onPayByCardChargeBackCount,
        Func<TResult> onPayByCardChargeBackAmount,
        Func<TResult> onPayByCardCheckUsCount,
        Func<TResult> onPayByCardEPaymentCount,
        Func<TResult> onIntlUsdTransactionCount,
        Func<TResult> onIntlFxTransactionCount,
        Func<TResult> onIntlFxTransactionAmount,
        Func<TResult> onNoAccessUser,
        Func<TResult> onIntlFxReturnedCount,
        Func<TResult> onIntlFxReturnedAmount,
        Func<TResult> onFasterPaymentRtp,
        Func<TResult> onCardFundedIntlEPmtUsdWire,
        Func<TResult> onFasterPaymentVcard,
        Func<TResult> onApplicableTax,
        Func<TResult> onOther,
        Func<string, TResult> otherwise) =>
        this switch
        {
            _ when this == Users => onUsers(),
            _ when this == Credit => onCredit(),
            _ when this == Debit => onDebit(),
            _ when this == Documents => onDocuments(),
            _ when this == CheckUs => onCheckUs(),
            _ when this == ConsoleUser => onConsoleUser(),
            _ when this == Company => onCompany(),
            _ when this == CheckNonUs => onCheckNonUs(),
            _ when this == EPayment => onEPayment(),
            _ when this == Fax => onFax(),
            _ when this == ZenBill => onZenBill(),
            _ when this == RecvdEPayment => onRecvdEPayment(),
            _ when this == Ar => onAr(),
            _ when this == PayPal => onPayPal(),
            _ when this == MailInvoices => onMailInvoices(),
            _ when this == SupportChat => onSupportChat(),
            _ when this == SupportEmail => onSupportEmail(),
            _ when this == SupportPhone => onSupportPhone(),
            _ when this == SyncPremium => onSyncPremium(),
            _ when this == CustomRoles => onCustomRoles(),
            _ when this == TrainingLvl1 => onTrainingLvl1(),
            _ when this == TrainingLvl2 => onTrainingLvl2(),
            _ when this == TrainingLvl3 => onTrainingLvl3(),
            _ when this == AcctMgmtLvl1 => onAcctMgmtLvl1(),
            _ when this == AcctMgmtLvl2 => onAcctMgmtLvl2(),
            _ when this == AcctMgmtLvl3 => onAcctMgmtLvl3(),
            _ when this == DemoAccounts => onDemoAccounts(),
            _ when this == CentralBilling => onCentralBilling(),
            _ when this == FirmBranding => onFirmBranding(),
            _ when this == SalesTools => onSalesTools(),
            _ when this == MultipleModules => onMultipleModules(),
            _ when this == ConsoleCompany => onConsoleCompany(),
            _ when this == AccountantUser => onAccountantUser(),
            _ when this == UnlimitedConsoles => onUnlimitedConsoles(),
            _ when this == Discount => onDiscount(),
            _ when this == RemoteCheckDeposit => onRemoteCheckDeposit(),
            _ when this == XeroSync => onXeroSync(),
            _ when this == ApprovalPolicy => onApprovalPolicy(),
            _ when this == FeatureUser => onFeatureUser(),
            _ when this == ApprovalUser => onApprovalUser(),
            _ when this == Netsuite2 => onNetsuite2(),
            _ when this == Intacct => onIntacct(),
            _ when this == Salesforce => onSalesforce(),
            _ when this == FasterPaymentCheckOvernight => onFasterPaymentCheckOvernight(),
            _ when this == FasterPaymentCheck2Day => onFasterPaymentCheck2Day(),
            _ when this == FasterPaymentCheck3Day => onFasterPaymentCheck3Day(),
            _ when this == FasterPaymentAch => onFasterPaymentAch(),
            _ when this == FasterPaymentRpps => onFasterPaymentRpps(),
            _ when this == ApLvl1 => onApLvl1(),
            _ when this == ApLvl2 => onApLvl2(),
            _ when this == ApLvl3 => onApLvl3(),
            _ when this == ArLvl1 => onArLvl1(),
            _ when this == ArLvl2 => onArLvl2(),
            _ when this == ArLvl3 => onArLvl3(),
            _ when this == Qbe => onQbe(),
            _ when this == DesBill => onDesBill(),
            _ when this == OlbUser => onOlbUser(),
            _ when this == CollaboratorUser => onCollaboratorUser(),
            _ when this == IntlEPmtUsdWire => onIntlEPmtUsdWire(),
            _ when this == IntlEPmtFxWire => onIntlEPmtFxWire(),
            _ when this == IntlEPmtFxIach => onIntlEPmtFxIach(),
            _ when this == VoidCheck => onVoidCheck(),
            _ when this == VoidCheckReturned => onVoidCheckReturned(),
            _ when this == DocUpload => onDocUpload(),
            _ when this == BillCreated => onBillCreated(),
            _ when this == OlbUserLastLogin => onOlbUserLastLogin(),
            _ when this == CollaboratorLastLogin => onCollaboratorLastLogin(),
            _ when this == InvoiceEmailed => onInvoiceEmailed(),
            _ when this == Nsf => onNsf(),
            _ when this == LastSupportAccess => onLastSupportAccess(),
            _ when this == AmexPayment => onAmexPayment(),
            _ when this == NetSuiteSyncImplementation => onNetSuiteSyncImplementation(),
            _ when this == IntacctSyncImplementation => onIntacctSyncImplementation(),
            _ when this == SyncSetup => onSyncSetup(),
            _ when this == HybridDataEntry => onHybridDataEntry(),
            _ when this == VcardPayment => onVcardPayment(),
            _ when this == VcardPaymentVoidReissue => onVcardPaymentVoidReissue(),
            _ when this == SuaProcessedCount => onSuaProcessedCount(),
            _ when this == SuaProcessedAmount => onSuaProcessedAmount(),
            _ when this == SuaReturnedCount => onSuaReturnedCount(),
            _ when this == SuaReturnedAmount => onSuaReturnedAmount(),
            _ when this == PremiumSupport => onPremiumSupport(),
            _ when this == PremiumSupportPlus => onPremiumSupportPlus(),
            _ when this == ApiLicenseKeyFee => onApiLicenseKeyFee(),
            _ when this == ApiUserLicenseFee => onApiUserLicenseFee(),
            _ when this == ApiMaintenanceFee => onApiMaintenanceFee(),
            _ when this == DeveloperSupportFee => onDeveloperSupportFee(),
            _ when this == Implementation => onImplementation(),
            _ when this == SyncMigration => onSyncMigration(),
            _ when this == Training => onTraining(),
            _ when this == DocsOnCd => onDocsOnCd(),
            _ when this == ContractBilling => onContractBilling(),
            _ when this == ReceivedCcPaymentCount => onReceivedCcPaymentCount(),
            _ when this == WalletPmtIntlUsd => onWalletPmtIntlUsd(),
            _ when this == WalletPmtIntlFx => onWalletPmtIntlFx(),
            _ when this == ImplementationNetSuite => onImplementationNetSuite(),
            _ when this == ImplementationIntacct => onImplementationIntacct(),
            _ when this == ImplementationQuickBooksEnterprise => onImplementationQuickBooksEnterprise(),
            _ when this == ImplementationMicrosoftDynamics => onImplementationMicrosoftDynamics(),
            _ when this == ImplementationSso => onImplementationSso(),
            _ when this == CardFundedEPayment => onCardFundedEPayment(),
            _ when this == CardFundedCheck => onCardFundedCheck(),
            _ when this == DynamicApprovals => onDynamicApprovals(),
            _ when this == SyncImplementation => onSyncImplementation(),
            _ when this == VCardProcessedCount => onVCardProcessedCount(),
            _ when this == VCardProcessedAmount => onVCardProcessedAmount(),
            _ when this == VCardReturnedCount => onVCardReturnedCount(),
            _ when this == VCardReturnedAmount => onVCardReturnedAmount(),
            _ when this == GuestPayEPayment => onGuestPayEPayment(),
            _ when this == AuditorUser => onAuditorUser(),
            _ when this == PayByCardProcessedCount => onPayByCardProcessedCount(),
            _ when this == PayByCardProcessedAmount => onPayByCardProcessedAmount(),
            _ when this == PayByCardChargeBackCount => onPayByCardChargeBackCount(),
            _ when this == PayByCardChargeBackAmount => onPayByCardChargeBackAmount(),
            _ when this == PayByCardCheckUsCount => onPayByCardCheckUsCount(),
            _ when this == PayByCardEPaymentCount => onPayByCardEPaymentCount(),
            _ when this == IntlUsdTransactionCount => onIntlUsdTransactionCount(),
            _ when this == IntlFxTransactionCount => onIntlFxTransactionCount(),
            _ when this == IntlFxTransactionAmount => onIntlFxTransactionAmount(),
            _ when this == NoAccessUser => onNoAccessUser(),
            _ when this == IntlFxReturnedCount => onIntlFxReturnedCount(),
            _ when this == IntlFxReturnedAmount => onIntlFxReturnedAmount(),
            _ when this == FasterPaymentRtp => onFasterPaymentRtp(),
            _ when this == CardFundedIntlEPmtUsdWire => onCardFundedIntlEPmtUsdWire(),
            _ when this == FasterPaymentVcard => onFasterPaymentVcard(),
            _ when this == ApplicableTax => onApplicableTax(),
            _ when this == Other => onOther(),
            _ => otherwise(Value)
        };

    public void Match(Action onUsers,
        Action onCredit,
        Action onDebit,
        Action onDocuments,
        Action onCheckUs,
        Action onConsoleUser,
        Action onCompany,
        Action onCheckNonUs,
        Action onEPayment,
        Action onFax,
        Action onZenBill,
        Action onRecvdEPayment,
        Action onAr,
        Action onPayPal,
        Action onMailInvoices,
        Action onSupportChat,
        Action onSupportEmail,
        Action onSupportPhone,
        Action onSyncPremium,
        Action onCustomRoles,
        Action onTrainingLvl1,
        Action onTrainingLvl2,
        Action onTrainingLvl3,
        Action onAcctMgmtLvl1,
        Action onAcctMgmtLvl2,
        Action onAcctMgmtLvl3,
        Action onDemoAccounts,
        Action onCentralBilling,
        Action onFirmBranding,
        Action onSalesTools,
        Action onMultipleModules,
        Action onConsoleCompany,
        Action onAccountantUser,
        Action onUnlimitedConsoles,
        Action onDiscount,
        Action onRemoteCheckDeposit,
        Action onXeroSync,
        Action onApprovalPolicy,
        Action onFeatureUser,
        Action onApprovalUser,
        Action onNetsuite2,
        Action onIntacct,
        Action onSalesforce,
        Action onFasterPaymentCheckOvernight,
        Action onFasterPaymentCheck2Day,
        Action onFasterPaymentCheck3Day,
        Action onFasterPaymentAch,
        Action onFasterPaymentRpps,
        Action onApLvl1,
        Action onApLvl2,
        Action onApLvl3,
        Action onArLvl1,
        Action onArLvl2,
        Action onArLvl3,
        Action onQbe,
        Action onDesBill,
        Action onOlbUser,
        Action onCollaboratorUser,
        Action onIntlEPmtUsdWire,
        Action onIntlEPmtFxWire,
        Action onIntlEPmtFxIach,
        Action onVoidCheck,
        Action onVoidCheckReturned,
        Action onDocUpload,
        Action onBillCreated,
        Action onOlbUserLastLogin,
        Action onCollaboratorLastLogin,
        Action onInvoiceEmailed,
        Action onNsf,
        Action onLastSupportAccess,
        Action onAmexPayment,
        Action onNetSuiteSyncImplementation,
        Action onIntacctSyncImplementation,
        Action onSyncSetup,
        Action onHybridDataEntry,
        Action onVcardPayment,
        Action onVcardPaymentVoidReissue,
        Action onSuaProcessedCount,
        Action onSuaProcessedAmount,
        Action onSuaReturnedCount,
        Action onSuaReturnedAmount,
        Action onPremiumSupport,
        Action onPremiumSupportPlus,
        Action onApiLicenseKeyFee,
        Action onApiUserLicenseFee,
        Action onApiMaintenanceFee,
        Action onDeveloperSupportFee,
        Action onImplementation,
        Action onSyncMigration,
        Action onTraining,
        Action onDocsOnCd,
        Action onContractBilling,
        Action onReceivedCcPaymentCount,
        Action onWalletPmtIntlUsd,
        Action onWalletPmtIntlFx,
        Action onImplementationNetSuite,
        Action onImplementationIntacct,
        Action onImplementationQuickBooksEnterprise,
        Action onImplementationMicrosoftDynamics,
        Action onImplementationSso,
        Action onCardFundedEPayment,
        Action onCardFundedCheck,
        Action onDynamicApprovals,
        Action onSyncImplementation,
        Action onVCardProcessedCount,
        Action onVCardProcessedAmount,
        Action onVCardReturnedCount,
        Action onVCardReturnedAmount,
        Action onGuestPayEPayment,
        Action onAuditorUser,
        Action onPayByCardProcessedCount,
        Action onPayByCardProcessedAmount,
        Action onPayByCardChargeBackCount,
        Action onPayByCardChargeBackAmount,
        Action onPayByCardCheckUsCount,
        Action onPayByCardEPaymentCount,
        Action onIntlUsdTransactionCount,
        Action onIntlFxTransactionCount,
        Action onIntlFxTransactionAmount,
        Action onNoAccessUser,
        Action onIntlFxReturnedCount,
        Action onIntlFxReturnedAmount,
        Action onFasterPaymentRtp,
        Action onCardFundedIntlEPmtUsdWire,
        Action onFasterPaymentVcard,
        Action onApplicableTax,
        Action onOther,
        Action<string> otherwise)
    {
        if (this == Users) onUsers();
        else if (this == Credit) onCredit();
        else if (this == Debit) onDebit();
        else if (this == Documents) onDocuments();
        else if (this == CheckUs) onCheckUs();
        else if (this == ConsoleUser) onConsoleUser();
        else if (this == Company) onCompany();
        else if (this == CheckNonUs) onCheckNonUs();
        else if (this == EPayment) onEPayment();
        else if (this == Fax) onFax();
        else if (this == ZenBill) onZenBill();
        else if (this == RecvdEPayment) onRecvdEPayment();
        else if (this == Ar) onAr();
        else if (this == PayPal) onPayPal();
        else if (this == MailInvoices) onMailInvoices();
        else if (this == SupportChat) onSupportChat();
        else if (this == SupportEmail) onSupportEmail();
        else if (this == SupportPhone) onSupportPhone();
        else if (this == SyncPremium) onSyncPremium();
        else if (this == CustomRoles) onCustomRoles();
        else if (this == TrainingLvl1) onTrainingLvl1();
        else if (this == TrainingLvl2) onTrainingLvl2();
        else if (this == TrainingLvl3) onTrainingLvl3();
        else if (this == AcctMgmtLvl1) onAcctMgmtLvl1();
        else if (this == AcctMgmtLvl2) onAcctMgmtLvl2();
        else if (this == AcctMgmtLvl3) onAcctMgmtLvl3();
        else if (this == DemoAccounts) onDemoAccounts();
        else if (this == CentralBilling) onCentralBilling();
        else if (this == FirmBranding) onFirmBranding();
        else if (this == SalesTools) onSalesTools();
        else if (this == MultipleModules) onMultipleModules();
        else if (this == ConsoleCompany) onConsoleCompany();
        else if (this == AccountantUser) onAccountantUser();
        else if (this == UnlimitedConsoles) onUnlimitedConsoles();
        else if (this == Discount) onDiscount();
        else if (this == RemoteCheckDeposit) onRemoteCheckDeposit();
        else if (this == XeroSync) onXeroSync();
        else if (this == ApprovalPolicy) onApprovalPolicy();
        else if (this == FeatureUser) onFeatureUser();
        else if (this == ApprovalUser) onApprovalUser();
        else if (this == Netsuite2) onNetsuite2();
        else if (this == Intacct) onIntacct();
        else if (this == Salesforce) onSalesforce();
        else if (this == FasterPaymentCheckOvernight) onFasterPaymentCheckOvernight();
        else if (this == FasterPaymentCheck2Day) onFasterPaymentCheck2Day();
        else if (this == FasterPaymentCheck3Day) onFasterPaymentCheck3Day();
        else if (this == FasterPaymentAch) onFasterPaymentAch();
        else if (this == FasterPaymentRpps) onFasterPaymentRpps();
        else if (this == ApLvl1) onApLvl1();
        else if (this == ApLvl2) onApLvl2();
        else if (this == ApLvl3) onApLvl3();
        else if (this == ArLvl1) onArLvl1();
        else if (this == ArLvl2) onArLvl2();
        else if (this == ArLvl3) onArLvl3();
        else if (this == Qbe) onQbe();
        else if (this == DesBill) onDesBill();
        else if (this == OlbUser) onOlbUser();
        else if (this == CollaboratorUser) onCollaboratorUser();
        else if (this == IntlEPmtUsdWire) onIntlEPmtUsdWire();
        else if (this == IntlEPmtFxWire) onIntlEPmtFxWire();
        else if (this == IntlEPmtFxIach) onIntlEPmtFxIach();
        else if (this == VoidCheck) onVoidCheck();
        else if (this == VoidCheckReturned) onVoidCheckReturned();
        else if (this == DocUpload) onDocUpload();
        else if (this == BillCreated) onBillCreated();
        else if (this == OlbUserLastLogin) onOlbUserLastLogin();
        else if (this == CollaboratorLastLogin) onCollaboratorLastLogin();
        else if (this == InvoiceEmailed) onInvoiceEmailed();
        else if (this == Nsf) onNsf();
        else if (this == LastSupportAccess) onLastSupportAccess();
        else if (this == AmexPayment) onAmexPayment();
        else if (this == NetSuiteSyncImplementation) onNetSuiteSyncImplementation();
        else if (this == IntacctSyncImplementation) onIntacctSyncImplementation();
        else if (this == SyncSetup) onSyncSetup();
        else if (this == HybridDataEntry) onHybridDataEntry();
        else if (this == VcardPayment) onVcardPayment();
        else if (this == VcardPaymentVoidReissue) onVcardPaymentVoidReissue();
        else if (this == SuaProcessedCount) onSuaProcessedCount();
        else if (this == SuaProcessedAmount) onSuaProcessedAmount();
        else if (this == SuaReturnedCount) onSuaReturnedCount();
        else if (this == SuaReturnedAmount) onSuaReturnedAmount();
        else if (this == PremiumSupport) onPremiumSupport();
        else if (this == PremiumSupportPlus) onPremiumSupportPlus();
        else if (this == ApiLicenseKeyFee) onApiLicenseKeyFee();
        else if (this == ApiUserLicenseFee) onApiUserLicenseFee();
        else if (this == ApiMaintenanceFee) onApiMaintenanceFee();
        else if (this == DeveloperSupportFee) onDeveloperSupportFee();
        else if (this == Implementation) onImplementation();
        else if (this == SyncMigration) onSyncMigration();
        else if (this == Training) onTraining();
        else if (this == DocsOnCd) onDocsOnCd();
        else if (this == ContractBilling) onContractBilling();
        else if (this == ReceivedCcPaymentCount) onReceivedCcPaymentCount();
        else if (this == WalletPmtIntlUsd) onWalletPmtIntlUsd();
        else if (this == WalletPmtIntlFx) onWalletPmtIntlFx();
        else if (this == ImplementationNetSuite) onImplementationNetSuite();
        else if (this == ImplementationIntacct) onImplementationIntacct();
        else if (this == ImplementationQuickBooksEnterprise) onImplementationQuickBooksEnterprise();
        else if (this == ImplementationMicrosoftDynamics) onImplementationMicrosoftDynamics();
        else if (this == ImplementationSso) onImplementationSso();
        else if (this == CardFundedEPayment) onCardFundedEPayment();
        else if (this == CardFundedCheck) onCardFundedCheck();
        else if (this == DynamicApprovals) onDynamicApprovals();
        else if (this == SyncImplementation) onSyncImplementation();
        else if (this == VCardProcessedCount) onVCardProcessedCount();
        else if (this == VCardProcessedAmount) onVCardProcessedAmount();
        else if (this == VCardReturnedCount) onVCardReturnedCount();
        else if (this == VCardReturnedAmount) onVCardReturnedAmount();
        else if (this == GuestPayEPayment) onGuestPayEPayment();
        else if (this == AuditorUser) onAuditorUser();
        else if (this == PayByCardProcessedCount) onPayByCardProcessedCount();
        else if (this == PayByCardProcessedAmount) onPayByCardProcessedAmount();
        else if (this == PayByCardChargeBackCount) onPayByCardChargeBackCount();
        else if (this == PayByCardChargeBackAmount) onPayByCardChargeBackAmount();
        else if (this == PayByCardCheckUsCount) onPayByCardCheckUsCount();
        else if (this == PayByCardEPaymentCount) onPayByCardEPaymentCount();
        else if (this == IntlUsdTransactionCount) onIntlUsdTransactionCount();
        else if (this == IntlFxTransactionCount) onIntlFxTransactionCount();
        else if (this == IntlFxTransactionAmount) onIntlFxTransactionAmount();
        else if (this == NoAccessUser) onNoAccessUser();
        else if (this == IntlFxReturnedCount) onIntlFxReturnedCount();
        else if (this == IntlFxReturnedAmount) onIntlFxReturnedAmount();
        else if (this == FasterPaymentRtp) onFasterPaymentRtp();
        else if (this == CardFundedIntlEPmtUsdWire) onCardFundedIntlEPmtUsdWire();
        else if (this == FasterPaymentVcard) onFasterPaymentVcard();
        else if (this == ApplicableTax) onApplicableTax();
        else if (this == Other) onOther();
        else otherwise(Value);
    }
}
